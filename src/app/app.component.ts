import { Component, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'codecv';
  firmenNamen: string[] = [
    'sitegeist',
    'DESY',
    'novomind',
    'Syngenio AG',
    'Silipion',
    'hafencity.dev GmbH',
    'Bytro Labs',
    'Akquinet GmbH',
    'Softwerft',
    'Softship AG',
    'Deep Silver Fishlabs',
    'Byteclub GmbH',
    'Digital Masters GmbH',
    'cc.systems GmbH',
    'SPRYLAB',
    'iseo Digitalagentur',
    'mindworks GmbH',
    'DIU MarTech Solutions GmbH',
    'Liquam GmbH',
    'oktopods Agency',
    'WeAreGroup',
    '3DSolution GmbH',
    '3MO GmbH & Co. KG',
    '3united Deutschland GmbH',
    '4=1 Gesellschaft zur Entwicklung von Multimedia-Software mbH',
    '4commerce technologies AG',
    'HS Hamburger Software GmbH & Co. KG',
    '1xEUROPA Software+Internet GmbH',
    '2torium Software & Services UG',
    '42 the software architects GmbH',
    'ABSOLUTE Software GmbH',
    'RetroBrain R&D GmbH',
    '12Ghosts AG',
    '2nd-Source GmbH IT Hardware Broker',
    '5CUBE.digital GmbH',
    'AA-HA Group KG',
    'ACI EDV Systemhaus GmbH',
    'ACSG + DELTA Systems Ges. für Informations-Technologie mbH',
    'actior AG',
    'Advanced Systemhaus GmbH',
    'Aequitas Affinity GmbH',
    'AFC Rechenzentrum GmbH',
    'AFD Allgemeine Fernsprech- und Datenanlagen Deutschland GmbH',
    'Ahrens (Hard- und Software)',
    'Ahrens Rolf (Hard- und Software)',
    'Aibis Informationssysteme GmbH',
    'Adobe Systems Engineering GmbH',
    'Microsoft Deutschland GmbH',
    'PESOFT Geert W. Petersen',
    'Navigon AG',
    'SnapDragon Games GmbH',
    'Softbillig Inh. Ayse Turil',
    'Bigpoint GmbH',
    'McAfee GmbH'
  ];
  ngAfterViewInit() {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar-example3',
      offset: 0,
      smoothScroll: true
    });
  }
}
