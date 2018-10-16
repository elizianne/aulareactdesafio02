import React from "react";
import PropTypes from "prop-types";

import { Container, Repository } from "./styles";

const CompareList = ({ repositories, onClickRepo, ref }) => (
    <Container>
        {repositories.map(repository => (
            <Repository
                key={repository.id}
                type="button"
                onClick={() => onClickRepo(repository)}
            >
                <header>
                    <img
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                    />
                    <strong>{repository.name}</strong>
                    <small>{repository.owner.login}</small>
                </header>
            </Repository>
        ))}
    </Container>
);

CompareList.propTypes = {
    repositories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            owner: PropTypes.shape({
                login: PropTypes.string,
                avatar_url: PropTypes.string
            }),
            stargazers_count: PropTypes.number,
            forks_count: PropTypes.number,
            open_issues_count: PropTypes.number,
            pushed_at: PropTypes.string
        })
    ).isRequired,
    onClickRepo: PropTypes.func.isRequired
};

export default CompareList;
