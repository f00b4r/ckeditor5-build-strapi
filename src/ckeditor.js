/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import AlignmentPlugin from '@ckeditor/ckeditor5-alignment/src/alignment';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockQuotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import FontPlugin from '@ckeditor/ckeditor5-font/src/font';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import ImageAutoImagePlugin from '@ckeditor/ckeditor5-image/src/autoimage';
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsertPlugin from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageResizePlugin from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import IndentBlockPlugin from '@ckeditor/ckeditor5-indent/src/indentblock';
import IndentPlugin from '@ckeditor/ckeditor5-indent/src/indent';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import LinkImagePlugin from '@ckeditor/ckeditor5-link/src/linkimage';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbedPlugin from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOfficePlugin from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import TablePlugin from '@ckeditor/ckeditor5-table/src/table';
import TableToolbarPlugin from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformationPlugin from '@ckeditor/ckeditor5-typing/src/texttransformation';

import Base64UploadAdapterPlugin from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

export default class ClassicEditor extends ClassicEditorBase { }

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  // 1st level
  AlignmentPlugin,
  AutoformatPlugin,
  BlockQuotePlugin,
  BoldPlugin,
  EssentialsPlugin,
  FontPlugin,
  HeadingPlugin,
  IndentBlockPlugin,
  IndentPlugin,
  ItalicPlugin,
  LinkImagePlugin,
  LinkPlugin,
  ListPlugin,
  MediaEmbedPlugin,
  ParagraphPlugin,
  PasteFromOfficePlugin,
  TablePlugin,
  TableToolbarPlugin,
  TextTransformationPlugin,

  // 2nd level (Image)
  ImagePlugin,
  ImageAutoImagePlugin,
  ImageCaptionPlugin,
  ImageInsertPlugin,
  ImageResizePlugin,
  ImageStylePlugin,
  ImageToolbarPlugin,

  // 3rd level (Upload)
  Base64UploadAdapterPlugin,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'heading',
      'alignment',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'indent',
      'outdent',
      '|',
      'insertImage',
      'resizeImage',
      '|',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo'
    ]
  },
  image: {
    styles: [
      'alignLeft', 'alignCenter', 'alignRight'
    ],
    resizeOptions: [
      {
        name: 'resizeImage:original',
        label: 'Original',
        value: null
      },
      {
        name: 'resizeImage:50',
        label: '50%',
        value: '50'
      },
      {
        name: 'resizeImage:75',
        label: '75%',
        value: '75'
      }
    ],
    toolbar: [
      'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
      '|',
      'resizeImage',
      '|',
      'imageTextAlternative'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells'
    ]
  },
  language: 'en'
};
