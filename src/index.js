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
import { NavItem } from './components/NavItem';
import { NavItemParent } from './components/NavItemParent';
import { SearchBar } from './components/SearchBar';
import { Account } from './components/Account';
import { Favourite } from './components/Favourite';
 
register(Header, 'bkr-header', ['src']);
register(Input, 'bkr-input', ['label', 'id', 'name', 'type', 'for', 'dataVal', 'maxlength', 'dataValLength', 'dataValLengthMax']);
register(Button, 'bkr-button', ['type', 'text']); 
register(Alert, 'bkr-alert', ['type', 'msg']); 
register(Footer, 'bkr-footer', ['cd']);
register(Heading, 'bkr-heading', ['text']);
register(Paragraph, 'bkr-paragraph', ['text']);
register(Navigation, 'bkr-navigation', ['text']);
register(NavItem, 'bkr-nav-item', ['text']);
register(NavItemParent, 'bkr-nav-item-parent', ['icon', 'name']);
register(SearchBar, 'bkr-search-bar', ['text']);
register(Account, 'bkr-account', ['text']);
register(Favourite, 'bkr-favourite', ['text']);