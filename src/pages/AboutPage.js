import React from 'react';
import {
        Section,
        Grid
} from 'uikit-react';

const AboutPage = () => (
    <React.Fragment>
    <div class="uk-section uk-section-secondary uk-light">
        <div class="uk-container">

            <h1 class="uk-heading-2xlarge">About me</h1>

            <div class="uk-grid-match" uk-grid>
            <Grid gutter=" uk-child-width-expand@s uk-text-center">
                <Section>
                    <p>Donec a rutrum leo. Donec pulvinar condimentum odio, sit amet ultricies tellus aliquam suscipit. Ut metus lorem, dignissim ut augue euismod, sodales dapibus felis. Etiam fermentum dui in dui cursus interdum. Vestibulum sit amet varius mi. Vivamus egestas, erat at dictum pharetra, tellus velit lacinia nulla, a mattis erat odio viverra urna. Suspendisse ullamcorper odio ac dolor auctor tincidunt. Ut velit massa, dapibus eget nisl id, pulvinar dignissim orci. Praesent posuere dictum mi sit amet feugiat. Pellentesque bibendum congue arcu vitae tincidunt. Praesent pretium elit id tincidunt semper. Maecenas in quam fermentum, pulvinar eros non, hendrerit risus. Praesent vel dui metus.</p>
                </Section>
                <Section>
                    <p>Donec laoreet elementum condimentum. Fusce sollicitudin mattis nibh. Proin tempus erat nibh, ac aliquam orci lobortis eget. Cras quis augue iaculis, semper nibh non, luctus lacus. Maecenas sed mi ullamcorper est suscipit tincidunt faucibus at augue. Integer tellus erat, venenatis vitae ex at, luctus cursus felis. In in arcu ac nulla commodo sollicitudin non vel mi. Praesent eu rutrum quam. Praesent convallis cursus libero. Aliquam placerat tempus orci sit amet maximus. Sed sed gravida enim. Integer in elit dapibus, condimentum leo vitae, viverra diam. Vivamus dapibus felis sem, et molestie neque varius eget. Praesent efficitur varius imperdiet. Praesent dapibus vel erat fringilla euismod.</p>
                </Section>
                <Section>
                    <p>Aenean cursus, nulla at tincidunt euismod, lorem leo feugiat metus, ut pellentesque urna felis nec justo. Aliquam eu porta velit, a sollicitudin lacus. Ut vitae ultrices tellus. Donec ut molestie risus. Aliquam id dictum orci. Curabitur dictum ac dui ac mattis. Nunc consectetur tellus vitae scelerisque faucibus. Integer sodales ac lacus eu convallis. Curabitur tortor enim, commodo eget tristique sit amet, dictum vel dolor. Nulla eros dolor, hendrerit nec lorem a, malesuada porttitor enim. Aenean nisi purus, euismod sed augue at, convallis finibus erat. Quisque rutrum efficitur nisl sed sodales.</p>
                </Section>
            </Grid>
            </div>

        </div>
    </div>
    </React.Fragment>

);

export default AboutPage;
