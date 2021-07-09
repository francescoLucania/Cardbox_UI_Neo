import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  public data = [
    {
      colorTitle: 'Gosblue',
      colorCode: '#0D4CD3',
      colorValue: '#0D4CD3 100%',
      colorVar: '$color-gosblue',
      colorDescription: 'Основной синий цвет портала. Используется в иконках, интерективных элементах, цвет ссылки, цвет фона, и обводки основной и второстепенной кнопки.',
    },
    {
      colorTitle: 'Gosred',
      colorCode: '#EE3F58',
      colorValue: '#EE3F58 100%',
      colorVar: '$color-gosred',
      colorDescription: 'Основной красный цвет портала. Используется в иконках, в графке и графических элементах. Не используется для наборных текстов.',
    },
    {
      colorTitle: 'Tela rosso',
      colorCode: '#E11432',
      colorValue: '#E11432 100%',
      colorVar: '$color-tela-rosso',
      colorDescription: 'Красный цвет для надписей. Используется для сообщений для ошибок',
    },
    {
      colorTitle: 'Summer night',
      colorCode: '#0B1F33',
      colorValue: '#0B1F33 100%',
      colorVar: '$color-summer-night',
      colorDescription: 'Основной темный цвет портала. Заменяет собой черный цвет. Чистый черный цвет не используется.',
    },
    {
      colorTitle: 'Text Helper',
      colorCode: '#66727F',
      colorValue: '#66727F 100%',
      colorVar: '$color-text-helper',
      colorDescription: 'Второстепенный темный цвет портала. Используется как в шрифтах так и графике.',
    },
    {
      colorTitle: 'Active item',
      colorCode: '#1D5DEB',
      colorValue: '#1D5DEB 100%',
      colorVar: '$color-active-item',
      colorDescription: 'Цвет активного действия. В основном используется для подсветки элементов при наведение на них курсора мыши.',
    },
    {
      colorTitle: 'Blu digitale',
      colorCode: '#4D83FA',
      colorValue: '#4D83FA 100%',
      colorVar: '$color-blu-digitale',
      colorDescription: 'Цвет булетов, нумерованного и маркированного списков.',
    },
    {
      colorTitle: 'Blu selvaggio',
      colorCode: '#9DACCE',
      colorValue: '#9DACCE 100%',
      colorVar: '$color-blu-selvaggio',
      colorDescription: 'Цвет Placeholder',
    },
    {
      colorTitle: 'Button Disabled',
      colorCode: '#E5EAF5',
      colorValue: '#E5EAF5 100%',
      colorVar: '$color-button-disabled',
      colorDescription: 'Цвет фона заблокированных элементов.',
    },
    {
      colorTitle: 'Background',
      colorCode: '#FAFCFF',
      colorValue: '#FAFCFF 100%',
      colorVar: '$color-background',
      colorDescription: 'Цвет фона страницы.',
    },
    {
      colorTitle: 'Input',
      colorCode: '#F5F7FA',
      colorValue: '#F5F7FA 100%',
      colorVar: '$color-input',
      colorDescription: 'Цвет фона поля ввода. Используется только на белой подложке. ',
    },
    {
      colorTitle: 'BG Disable',
      colorCode: '#D1D5DF',
      colorValue: '#D1D5DF 100%',
      colorVar: '$color-bg-disable',
      colorDescription: 'Цвет фона заблокированного поля ввода. Используется только на белой подложке.',
    },
    {
      colorTitle: 'Devider',
      colorCode: '#99B1E6',
      colorValue: '#99B1E6 100%',
      colorVar: '$color-devider',
      colorDescription: 'Цвет раздилителей и обводок полей, интерактивных элементов.',
    },
    {
      colorTitle: 'Error Highlight',
      colorCode: 'rgba(238, 63, 88, 0.16)',
      colorValue: '#EE3F58 16%',
      colorVar: '$color-error-highlight',
      colorDescription: 'Цвет подсветки ошибки в поле. Имеет цвет заменитель для тех случаев когда не возможно применить прозрачность.',
    },
    {
      colorTitle: 'Shadow',
      colorCode: '#E6EBF5',
      colorValue: '#E6EBF5 100%',
      colorVar: '$color-shadow',
      colorDescription: 'Цвет теней. Различные тени настраиваются размытием и приозрачностью в соотвествии с дизайн макетом.',
    },
    {
      colorTitle: 'Tagline',
      colorCode: 'rgba(29, 93, 235, 0.16)',
      colorValue: '#1D5DEB  6%',
      colorVar: '$color-tagline',
      colorDescription: 'Цвет стандартных тегов.',
    },
    {
      colorTitle: 'Tagline Hit',
      colorCode: 'rgba(29, 93, 235, 0.6)',
      colorValue: '#1D5DEB 6%',
      colorVar: '$color-tagline',
      colorDescription: 'Цвет стандартных тегов.',
    },
    {
      colorTitle: 'Giallo brillante',
      colorCode: '#FED13E',
      colorValue: '#FED13E 100%',
      colorVar: '$color-giallo-brillante',
      colorDescription: 'Желтый цвет используемый для тегов, элементов с надписями.',
    },
    {
      colorTitle: 'Foglia di acero',
      colorCode: '#FF8A00',
      colorValue: '#FF8A00 100%',
      colorVar: '$color-giallo-selezionato',
      colorDescription: 'Оранжевый цвет используемый для элементов выделяния в календаре,  и на синих фонах',
    },
    {
      colorTitle: 'Green Sea',
      colorCode: '#16A086',
      colorValue: '#16A086 100%',
      colorVar: '$color-green-sea',
      colorDescription: 'Зеленый цвет для графики и надписей.',
    },
    {
      colorTitle: 'Nephritis',
      colorCode: '#2DC36A',
      colorValue: '#2DC36A 100%',
      colorVar: '$color-nephritis',
      colorDescription: 'Зеленый цвет используемый для тегов, для иконок.',
    },
    {
      colorTitle: 'Pino verde',
      colorCode: '#12826E',
      colorValue: '#12826E 100%',
      colorVar: '$color-pino-verde',
      colorDescription: 'Зеленый цвет используемый для тегов, для надписей.',
    },
  ]

  public searchCode = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchColor({target}: Event) {
    this.searchCode = (target as HTMLInputElement).value
  }
}
