import logo from './logo.svg';
import './App.css';
import {gaEvent} from "./gAnalytics";
import DocumentMeta from 'react-document-meta';

function About() {
    const buttonClick = (text) => {
        gaEvent('event', `custom_click`, {page: 'about', button: text});
    }

    const meta = {
        title: 'About page title',
        description: 'About page description',
        canonical: 'https://siluk007.github.io/#/about',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'react,meta,document,html,tags,about'
            }
        }
    };
    return (
        <DocumentMeta {...meta}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>About page</p>
                    <p><a href="https://github.com/siluk007/siluk007.github.io" target="_blank">Go to github</a></p>
                    <div >
                        <button onClick={() => buttonClick('third answer')}>third answer</button>
                        <button onClick={() => buttonClick('fourth answer')}>fourth answer</button>
                    </div>
                </header>
            </div>
        </DocumentMeta>
    );
}

export default About;
