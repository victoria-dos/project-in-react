import React from 'react';
import {
        Section,
        Grid,
} from 'uikit-react';
import background from '../images/sea.jpg';

const HomePage = () => (
    <React.Fragment>
<div class="uk-section uk-section-secondary uk-light">
    <div class="uk-container">

        <h1 class="uk-heading-2xlarge">Welcome!</h1>

        <div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style={{ backgroundImage: `url(${background})` }}>
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Headline</h1>
        <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>


    </div>
</div>
<div class="uk-section uk-section-muted">
    <div class="uk-container">

        <h1 class="uk-heading-2xlarge">Section 1</h1>

        <div class="uk-grid-match" uk-grid>
        <Grid gutter=" uk-child-width-expand@s uk-text-center">
            <Section>
            <p>Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Curabitur bibendum justo non orci. Maecenas aliquet accumsan leo. Duis risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus faucibus molestie nisl. Maecenas aliquet accumsan leo. Aenean placerat. Aenean fermentum risus id tortor. Vivamus ac leo pretium faucibus. Duis condimentum augue id magna semper rutrum. In dapibus augue non sapien. Pellentesque ipsum. Aenean vel massa quis mauris vehicula lacinia. Etiam quis quam. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Integer tempor.</p>
            </Section>
            <Section>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Suspendisse nisl. Duis pulvinar. Sed convallis magna eu sem. Fusce aliquam vestibulum ipsum. Sed convallis magna eu sem. Aliquam erat volutpat. Integer in sapien. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Maecenas lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Integer imperdiet lectus quis justo. Quisque porta. Phasellus rhoncus. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nulla pulvinar eleifend sem. Morbi scelerisque luctus velit.</p>
            </Section>
            <Section>
            <p>Vestibulum fermentum tortor id mi. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Etiam bibendum elit eget erat. Aliquam erat volutpat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Vivamus porttitor turpis ac leo. Duis condimentum augue id magna semper rutrum. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Duis pulvinar. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Integer vulputate sem a nibh rutrum consequat. Duis pulvinar.</p>
            </Section>
            </Grid>
        </div>

    </div>
</div>



    </React.Fragment>

);

export default HomePage;
