import { h, render } from 'preact';
import register from 'preact-custom-element';

import { data } from './utils/data.js';

import { Button } from './components/Button';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Input } from './components/Input';
import { Alert } from './components/Alert';
import { Heading } from './components/Heading';
import { Paragraph } from './components/Paragraph';
import { Navigation } from './components/Navigation';
import { NavItemChildren } from './components/NavItemChildren.jsx';
import { NavItemParent } from './components/NavItemParent';
import { SearchBar } from './components/SearchBar';
import { Account } from './components/Account';
import { Favourite } from './components/Favourite';
import { SimpleText } from './components/SimpleText';
 
register(Header, 'bkr-header', ['src']);
register(Input, 'bkr-input', ['label', 'id', 'name', 'type', 'for', 'dataVal', 'maxlength', 'dataValLength', 'dataValLengthMax']);
register(Input, 'bkr-input', ['label', 'linkurl', 'linktext', 'tag_id', 'name', 'type', 'for', 'dataVal', 'maxLength', 'dataValLength', 'dataValLengthMax']);
register(Button, 'bkr-button', ['type', 'text', 'classes', 'tag_id']); 
register(Alert, 'bkr-alert', ['type', 'msg', 'classes']); 
register(Footer, 'bkr-footer', ['cd']);
register(Heading, 'bkr-heading', ['text']);
register(Paragraph, 'bkr-paragraph', ['text', 'classes']);
register(Navigation, 'bkr-navigation', ['text']);
register(NavItemChildren, 'bkr-nav-item-children', ['children']);
register(NavItemParent, 'bkr-nav-item-parent', ['icon', 'name', 'children']);
register(SearchBar, 'bkr-search-bar', ['text']);
register(Account, 'bkr-account', ['text']);
register(Favourite, 'bkr-favourite', ['text']);
register(SimpleText, 'bkr-simple-text', ['classes', 'text']);