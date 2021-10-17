import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import image from '../images/sea.jpg';
import { Container,
        Image
        } from 'uikit-react';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
    const relatedArticles = articleContent.filter(article => article.name !== name);

    if (!article) return <NotFoundPage />
    return (
        <React.Fragment>
            <Container>
            <h1 class="uk-heading-medium">{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}

<div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
            <Image src={ image } alt="" />
            <div class="uk-position-center">
                <div class="uk-transition-slide-top-small"><h4 class="uk-margin-remove">Headline</h4></div>
                <div class="uk-transition-slide-bottom-small"><h4 class="uk-margin-remove">Subheadline</h4></div>
            </div>
        </div>
    </div>

            <h3>Related articles:</h3>
            <ArticlesList articles={relatedArticles} />
            

            </Container>
        
        </React.Fragment>
    
    );
}

export default ArticlePage;