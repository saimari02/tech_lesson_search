// @CLASS GoogleSearch
export class GoogleSearch {
	init() {
		const _URLhref = location.pathname;

		this._path = this._urlSplit( _URLhref );
		this._set();
	}

	_urlSplit(value) {

		const _URLhref = value;
		const _path = _URLhref.split('/');
		_path.shift();
		_path.pop();

		return _path;
	}

	_set(){
		//日本語版の場合
		if(this._path[0] != 'english' ){
			const _JapaneseWord = 'キーワードを入力してください';

			this._searchJapanese();
			this._placeholderChange( _JapaneseWord );
		//英語版の場合
		} else {
			const _EnglishWord = 'Please enter keywords';

			this._searchEnglish();
			this._placeholderChange( _EnglishWord );
		}
	}

	_searchJapanese(){
		var cx = '111111111111111111111:uwdshy6w0tc';
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);
	}

	_searchEnglish(){
		var cx = '222222222222222222222:yfoptuqgrm4';
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);
	}

	_placeholderChange(word){
		const _placeholderText = word;

		// HTML読み込み後にinput要素を取得(IEハック)
		setTimeout( function(){
			this._$inputField = $( 'input.p-header__search-input' );
			this._$inputField.attr('placeholder', _placeholderText );
		}, 1000 );
	}
}