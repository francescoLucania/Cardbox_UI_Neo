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
      size: '32/40',
      title: 'Heading H2',
      mixin: 'heading-h2($font-weight)',
      class: 'heading-h2'
    },
    {
      size: '24/32',
      title: 'Heading H3',
      mixin: 'heading-h3($font-weight)',
      class: 'heading-h3'
    },
    {
      size: '20/28',
      title: 'Heading H4',
      mixin: 'heading-h4($font-weight)',
      class: 'heading-h4'
    },
    {
      size: '18/24',
      title: 'Heading H5',
      mixin: 'heading-h5($font-weight)',
      class: 'heading-h5'
    },
    {
      size: '16/24',
      title: 'Heading H6',
      mixin: 'heading-h6($font-weight)',
      class: 'heading-h6'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
