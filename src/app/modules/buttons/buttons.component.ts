import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  public dataBase = [
    {
      title: 'Кнопка 1',
      class: '',
      description: 'Дефолтное состояние с горизонтальными паддингами 24px (Миксин:&nbsp;<b>cardboxui-base-button(min)</b>)'
    },
    {
      title: 'Кнопка 1',
      class: 'horizontal-padding-big',
      description: 'Дефолтное состояние с горизонтальными паддингами 40px (Миксин:&nbsp;<b>cardboxui-base-button(max)</b>)'
    },
    {
      title: 'Кнопка 1',
      class: 'is-hover',
      description: 'Кнопка с :hover & :focus'
    },
    {
      title: 'Кнопка 1',
      class: 'is-active',
      description: 'Кнопка с :active (нажатие)'
    },
    {
      title: 'Кнопка 1',
      class: 'is-disabled',
      description: 'Кнопка :disabled (заблокирована)'
    },
    {
      title: 'Кнопка 1',
      class: 'base-button-block',
      description: 'При добавлении класса .base-button-block, кнопка растянется на всю доступную ширину'
    },
  ]

  public dataSecondary = [
    {
      title: 'Кнопка 2',
      class: '',
      description: 'Дефолтное состояние с горизонтальными паддингами 24px (Миксин:&nbsp;<b>cardboxui-base-button(min)</b>)'
    },
    {
      title: 'Кнопка 2',
      class: 'horizontal-padding-big',
      description: 'Дефолтное состояние с горизонтальными паддингами 40px (Миксин:&nbsp;<b>cardboxui-base-button(max)</b>)'
    },
    {
      title: 'Кнопка 2',
      class: 'is-hover',
      description: 'Кнопка с :hover & :focus'
    },
    {
      title: 'Кнопка 2',
      class: 'is-active',
      description: 'Кнопка с :active (нажатие)'
    },
    {
      title: 'Кнопка 2',
      class: 'is-disabled',
      description: 'Кнопка :disabled (заблокирована)'
    },
    {
      title: 'Кнопка 2',
      class: 'base-button-block',
      description: 'При добавлении класса .base-button-block, кнопка растянется на всю доступную ширину'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
