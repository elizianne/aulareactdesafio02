import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container, IssuesList } from "./styles";

export default class Issues extends Component {
    static propTypes = {
        issuesRepo: PropTypes.array
    };

    render() {
        const { issuesRepo } = this.props;
        return (
            <Container>
                <IssuesList>
                    {issuesRepo.map(issue => (
                        <li key={issue.id}>
                            <img
                                src={issue.user.avatar_url}
                                alt={issue.user.login}
                            />
                            <div>
                                <strong>{issue.title}</strong>
                                <span>{issue.user.login}</span>
                                <a href={issue.html_url} target="blank">
                                    <i className="fa fa-external-link" />
                                    Abrir issue
                                </a>
                            </div>
                        </li>
                    ))}
                </IssuesList>
            </Container>
        );
    }
}
