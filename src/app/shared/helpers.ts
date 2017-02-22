declare let $;

export class Helper {
  static removeEmptyTags(selector) {
    $(selector).each(function () {
      if ($(this).text().trim() === '') {
        $(this).remove();
      }
    });
  }
}