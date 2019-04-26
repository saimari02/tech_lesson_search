# tech_lesson_search
[Googleカスタム検](https://cse.google.com/)機能の設置例です。

## Memo
* Googleカスタム検索の機能設定は、管理画面上で行う。
* 検索結果ページは別に作成するタイプで、このコードでは検索先は設けていない。（※実際の検索はできない）

## Target file
    /assets/js/common.js 

## Processing
- 日本語ページと、英語ページで、以下の処理を出し分ける
  - `input`要素の`placeholder`属性の値
  - APIのコードを

## Custom Search Element Control API
以下は、Googleカスタム検索用の埋め込みコードになるので、編集不可。

    var cx = '111111111111111111111:uwdshy6w0tc';
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);

*※`var cx = '111111111111111111111:uwdshy6w0tc'`は適当な値をいれています。*

## Licence

## References
- [【公式】Googleカスタム検索とは](https://support.google.com/customsearch/answer/4513751?hl=ja)
- [[Qiita]Googleカスタム検索エンジンの設置方法](https://qiita.com/vent/items/0ce60beba453f4584a31)
