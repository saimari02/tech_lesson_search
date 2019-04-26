// @CLASS GoogleSearch
const GoogleSearch = (function() {

	function GoogleSearch(){}

	const p = GoogleSearch.prototype;

	p.init = function() {
		const _URLhref = location.pathname;

		this._path = this._urlSplit( _URLhref );
		this._set();
	}

	p._urlSplit = function(value) {

		const _URLhref = value;
		const _path = _URLhref.split('/');
		_path.shift();
		_path.pop();

		return _path;
	}

	p._set = function(){
		//日本語版の場合
		if(this._path[0] != 'english' ){
			const _JapaneseWord = 'キーワードを入力してください';

			this._searchJapanese();
			this._placeholderChange( _JapaneseWord );
		} else {
			const _EnglishWord = 'Please enter keywords';

			this._searchEnglish();
			this._placeholderChange( _EnglishWord );
		}
	}

	p._searchJapanese = function(){
		var cx = '111111111111111111111:uwdshy6w0tc';
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);
	}

	p._searchEnglish = function(){
		var cx = '222222222222222222222:yfoptuqgrm4';
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);
	}

	p._placeholderChange = function( word ){
		const _placeholderText = word;

		// HTML読み込み後にinput要素を取得(IEハック)
		setTimeout( function(){
			this._$inputField = $( 'input.p-header__search-input' );
			this._$inputField.attr('placeholder', _placeholderText );
		}, 1000 );
	}

	return GoogleSearch;

}());

$(document).ready(function($) {
	const googleSearch = new GoogleSearch();
	googleSearch.init();
});