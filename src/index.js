import { h, render } from 'preact';
import register from 'preact-custom-element';
import Handlebars from 'handlebars';


import data from './util/data.js';

import { Button } from './components/Button';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Input } from './components/Input';
import { Alert } from './components/Alert';
import { Heading } from './components/Heading';
import { Paragraph } from './components/Paragraph';
import { Navigation } from './components/Navigation';
import { NavItemChildren } from './components/NavItemChildren';
import { NavItemParent } from './components/NavItemParent';
import { SearchBar } from './components/SearchBar';
import { Account } from './components/Account';
import { Link } from './components/Link';
import { SimpleText } from './components/SimpleText';
import { Favourite } from './components/Favourite';
 
register(Header, 'bkr-header', ['src']);
register(Input, 'bkr-input', ['label', 'linkurl', 'linktext', 'tag_id', 'name', 'type', 'for', 'dataVal', 'maxLength', 'dataValLength', 'dataValLengthMax']);
register(Button, 'bkr-button', ['type', 'text', 'classes', 'tag_id']); 
register(Alert, 'bkr-alert', ['type', 'msg', 'classes']); 
register(Footer, 'bkr-footer', ['cd']);
register(Heading, 'bkr-heading', ['text']);
register(Paragraph, 'bkr-paragraph', ['text', 'classes']);
register(Navigation, 'bkr-navigation', ['text']);
register(NavItemChildren, 'bkr-nav-item-children', ['name', 'href']);
register(NavItemParent, 'bkr-nav-item-parent', ['id', 'icon', 'name', 'children']);
register(SearchBar, 'bkr-search-bar', ['text']);
register(Account, 'bkr-account', ['text']);
register(Favourite, 'bkr-favourite', ['function', 'href']);
register(Link, 'bkr-link', ['text', '']);
register(SimpleText, 'bkr-simple-text', ['classes', 'text']);
