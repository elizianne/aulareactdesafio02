import React, { Component } from "react";
import api from "../../services/api";
import moment from "moment";

import { Container, Form, Container1 } from "./styles";
import logo from "../../assets/logo.png";
import CompareList from "../../components/CompareList";
import Issues from "../../components/Issues";

export default class Main extends Component {
    state = {
        repositoryError: false,
        repositoryInput: "",
        repositories: [],
        loading: false,
        issues: "all",
        issuesRepo: [],
        showIssues: false
    };

    handleAddRepository = async e => {
        e.preventDefault();

        this.setState({ loading: true });

        try {
            const { data: repository } = await api.get(
                `/repos/${this.state.repositoryInput}`
            );

            repository.lastCommit = moment(repository.pushed_at).fromNow();

            this.setState({
                repositoryInput: "",
                repositories: [...this.state.repositories, repository],
                repositoryError: false
            });
        } catch (err) {
            this.setState({ repositoryError: true });
        } finally {
            this.setState({ loading: false });
        }
    };

    loadIssues = async repository => {
        const { data } = await api.get(
            `/repos/${repository.full_name}/issues?state=${this.state.issues}`
        );

        this.setState({ showIssues: true, issuesRepo: data });
    };

    render() {
        const { showIssues, issuesRepo } = this.state;
        return (
            <Container>
                <Container1>
                    <img src={logo} alt="Github Compare" />
                    <Form
                        withError={this.state.repositoryError}
                        onSubmit={this.handleAddRepository}
                    >
                        <input
                            type="text"
                            placeholder="usuário/repositório"
                            value={this.state.repositoryInput}
                            onChange={e =>
                                this.setState({
                                    repositoryInput: e.target.value
                                })
                            }
                        />
                        <button type="submit">
                            {this.state.loading ? (
                                <i className="fa fa-spinner fa-pulse" />
                            ) : (
                                "OK"
                            )}
                        </button>
                    </Form>
                    <CompareList
                        repositories={this.state.repositories}
                        onClickRepo={this.loadIssues}
                    />
                </Container1>
                {showIssues && <Issues issuesRepo={issuesRepo} />}
            </Container>
        );
    }
}
