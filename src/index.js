import { h, render } from 'preact';
import register from 'preact-custom-element';

import { Button } from './components/Button';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Input } from './components/Input';
import { Alert } from './components/Alert';
import { Heading } from './components/Heading';
 
register(Header, 'bkr-header', ['src']);
register(Input, 'bkr-input', ['label', 'id', 'name', 'type', 'for', 'dataVal', 'maxlength', 'dataValLength', 'dataValLengthMax']);
register(Button, 'bkr-button', ['type', 'text']); 
register(Alert, 'bkr-alert', ['type', 'msg']); 
register(Footer, 'bkr-footer', ['cd']);
register(Heading, 'bkr-heading', ['text']);