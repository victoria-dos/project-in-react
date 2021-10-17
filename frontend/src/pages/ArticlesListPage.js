import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import { Container } from 'uikit-react';

const ArticlesListPage = () => (
    <React.Fragment>
        <Container>
        <h1 class="uk-heading-2xlarge uk-margin-large-bottom">Articles</h1>
        <ArticlesList articles={articleContent}/>
        </Container>
    </React.Fragment>

);

export default ArticlesListPage;
