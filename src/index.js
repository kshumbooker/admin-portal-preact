import { h, render } from 'preact';
import 'flowbite';
import register from 'preact-custom-element';
import Handlebars from 'handlebars';

import { faker } from '@faker-js/faker';
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
 
register(Header, 'b-header', ['src']);
register(Input, 'b-input', ['label', 'linkurl', 'linktext', 'tag_id', 'name', 'type', 'for', 'dataVal', 'maxLength', 'dataValLength', 'dataValLengthMax']);
register(Button, 'b-button', ['type', 'text', 'classes', 'tag_id']); 
register(Alert, 'b-alert', ['type', 'msg', 'classes']); 
register(Footer, 'b-footer', ['cd']);
register(Heading, 'b-heading', ['text']);
register(Paragraph, 'b-paragraph', ['text', 'classes']);
register(Navigation, 'b-navigation', ['text']);
register(NavItemChildren, 'b-nav-item-children', ['name', 'href']);
register(NavItemParent, 'b-nav-item-parent', ['id', 'icon', 'name', 'children']);
register(SearchBar, 'b-search-bar', ['text']);
register(Account, 'b-account', ['text']);
register(Favourite, 'b-favourite', ['function', 'href']);
register(Link, 'b-link', ['text', '']);
register(SimpleText, 'b-simple-text', ['classes', 'text']);
