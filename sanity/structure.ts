import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Emmy's Projects")
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')),
            ...S.documentTypeListItems().filter(listItem => !['siteSettings'].includes(listItem.getId()!))
    ])


/*
S.list()
    .title("Emmy's Projects")
    .items([
      S.documentTypeListItem('project').title('Projects'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['project'].includes(item.getId()!),
      )
    ])
*/