import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid,
        Section
 } from 'uikit-react';

const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => (
      <Container>
          <Grid gutter=" uk-child-width-expand@s uk-text-center">
          <Section>
          <Link type="text" key={key} to={`/article/${article.name}`}>
            <h3 class="uk-heading-line uk-text-left"><span>{article.title}</span></h3>
            {/* <p>{article.content[0].substring(0, 150)}...</p> */}
            </Link>
          </Section>
        
        </Grid>
      </Container>
    ))}
    </>
);

export default ArticlesList;
