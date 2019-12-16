import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';
import { FaFacebookSquare } from 'react-icons/fa';
import TelenorFacebookPreview from '../plugins/TelenorFacebookPreview';
import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Telenor Open Graph')
        .icon(FaFacebookSquare)
        .child(
          S.editor()
            .schemaType('telenorFacebook')
            .documentId('telenorFacebook')
            .views([
              S.view.form().icon(EditIcon),
              S.view
                .component(TelenorFacebookPreview)
                .icon(EyeIcon)
                .title('Web Preview'),
            ])
        ),
      ...S.documentTypeListItems().filter(
        listItem => !['telenorFacebook'].includes(listItem.getId())
      ),
    ]);
