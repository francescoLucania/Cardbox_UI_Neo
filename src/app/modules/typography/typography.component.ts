import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

  public data = [
    {
      size: '16/24',
      title: 'Наборный текс 1',
      mixin: 'text-base($font-weight)',
      class: 'text-base'
    },
    {
      size: '14/20',
      title: 'Наборный текс 2',
      mixin: 'text-small($font-weight)',
      class: 'text-small'
    },
    {
      size: '36/40',
      title: 'H1',
      mixin: 'h1($font-weight)',
      class: 'h1'
    },
    {
      size: '32/40',
      title: 'H2',
      mixin: 'h2($font-weight)',
      class: 'h2'
    },
    {
      size: '24/32',
      title: 'H3',
      mixin: 'h3($font-weight)',
      class: 'h3'
    },
    {
      size: '20/28',
      title: 'H4',
      mixin: 'h4($font-weight)',
      class: 'h4'
    },
    {
      size: '18/24',
      title: 'H5',
      mixin: 'h5($font-weight)',
      class: 'h5'
    },
    {
      size: '16/24',
      title: 'H6',
      mixin: 'h6($font-weight)',
      class: 'h6'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
