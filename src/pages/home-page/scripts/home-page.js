/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

import { loader } from './loader.js'


document.querySelector('.orderSummary-submitButton')
    .addEventListener(
        'click', () =>
        loader(
            document.querySelector('.submitButton__text'),
            document.querySelector('.button-loader')
        )
    );