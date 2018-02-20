/* インストール
<script type='text/javascript' src='./A3RT_SDK.js'></script>

TEXT SUGGEST
 <使い方>
	a3rt_text_suggest(a3rt_key,a3rt_description,a3rt_style,a3rt_separation, a3rt_callback)
	.done(function(json){	/ 正常の処理		})
	.fail(function (XMLHttpRequest, textStatus, errorThrown) { /異常の処理	});

	<パラメーターの説明>
	https://a3rt.recruit-tech.co.jp/product/textSuggestAPI/
	a3rt_key =	apikey
	a3rt_description = previous_description
	a3rt_style = style
	a3rt_separation = separation
	a3rt_callback = callback

*/

function a3rt_text_suggest(a3rt_key, 　a3rt_description, 　a3rt_style, 　a3rt_separation, a3rt_callback) {

  var input_data = {
    'apikey': a3rt_key,
    'previous_description': a3rt_description
  }
  var a3rt_url = 'https://api.a3rt.recruit-tech.co.jp/text_suggest/v2/predict'

  if (a3rt_style != null && a3rt_style.length > 0) {
    input_data['style'] = a3rt_style
  };

  if (a3rt_separation != null && a3rt_separation.length > 0) {
    input_data['separation'] = a3rt_separation
  };

  if (a3rt_callback != null && a3rt_callback.length > 0) {
    return $.ajax({
      type: 'get',
      url: a3rt_url,
      processData: true,
      contentType: false,
      data: input_data,
      dataType: 'jsonp',
      jsonpCallback: a3rt_callback
    });
  } else {
    return $.ajax({
      type: 'get',
      url: a3rt_url,
      processData: true,
      contentType: false,
      data: input_data,
      dataType: 'json'
    });
  }

  return 0;　
}



/* TEXT CLASSIFICATION
 <使い方>
	a3rt_text_classification(a3rt_key, a3rt_model_id, a3rt_text)
	.done(function(json){	/ 正常の処理		})
	.fail(function (XMLHttpRequest, textStatus, errorThrown) { /異常の処理	});

	<パラメーターの説明>
	https://a3rt.recruit-tech.co.jp/product/textClassificationAPI/
	a3rt_key = apikey
	a3rt_model_id = model_id
	a3rt_text = text

*/

function a3rt_text_classification(a3rt_key, a3rt_model_id, a3rt_text) {

  var input_data = {
    'apikey': a3rt_key,
    'model_id': a3rt_model_id,
    'text': a3rt_text
  };
  var a3rt_url = 'https://api.a3rt.recruit-tech.co.jp/text_classification/v1/classify';

  return $.ajax({
    type: 'post',
    url: a3rt_url,
    processData: true,
    contentType: 'application/x-www-form-urlencoded;charset=utf-8',
    data: input_data,
    dataType: 'json',
  });

  return false;
}

/* TALK
 <使い方>
	a3rt_talk(a3rt_key, a3rt_query, a3rt_callback)
	.done(function(json){	/ 正常の処理		})
	.fail(function (XMLHttpRequest, textStatus, errorThrown) { /異常の処理	});

	<パラメーターの説明>
	https://a3rt.recruit-tech.co.jp/product/talkAPI/
	a3rt_key = apikey
	a3rt_query = query
	a3rt_callback = callback

*/

function a3rt_talk(a3rt_key, a3rt_query, a3rt_callback) {

  var input_data = {
    'apikey': a3rt_key,
    'query': a3rt_query
  }
  var a3rt_url = 'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk'

  return $.ajax({
    type: 'post',
    url: a3rt_url,
    processData: true,
    contentType: 'application/x-www-form-urlencoded;charset=utf-8',
    data: input_data,
    dataType: 'json'
  });

  return 0;
}

/* IMAGE INFLUENCE
 <使い方>
	a3rt_image_infl(a3rt_key,a3rt_predict,a3rt_imagefile)
	.done(function(json){	/ 正常の処理		})
	.fail(function (XMLHttpRequest, textStatus, errorThrown) { /異常の処理	});

	<パラメーターの説明>
	https://a3rt.recruit-tech.co.jp/product/imageInfluenceAPI/
	a3rt_key = apikey
	a3rt_predict = predict
	a3rt_imagefile = imagefile

*/

function a3rt_image_infl(a3rt_key, a3rt_predict, a3rt_imagefile) {

  var input_data = new FormData();　　
  input_data.append('apikey', a3rt_key);
  input_data.append('predict', a3rt_predict);
  input_data.append('imagefile', a3rt_imagefile);

  var a3rt_url = 'https://api.a3rt.recruit-tech.co.jp/image_influence/v1/meat_score'

  return $.ajax({
    type: 'post',
    url: a3rt_url,
    processData: false,
    contentType: false,
    data: input_data,
    dataType: 'json'
  });

  return 0;
}

/* PLOOFREADING
 <使い方>
	a3rt_proofreading(a3rt_key,a3rt_sentence,a3rt_sensitivity,a3rt_callback)
	.done(function(json){	/ 正常の処理		})
	.fail(function (XMLHttpRequest, textStatus, errorThrown) { /異常の処理	});

	<パラメーターの説明>
	https://a3rt.recruit-tech.co.jp/product/proofreadingAPI/
	a3rt_key = apikey
	a3rt_sentence = sentence
	a3rt_sensitivity = sensitivity
	a3rt_callback = callback

*/


function a3rt_proofreading(a3rt_key, a3rt_sentence, a3rt_sensitivity, a3rt_callback) {

  var input_data = {
    'apikey': a3rt_key,
    'sentence': a3rt_sentence
  }
  var a3rt_url = 'https://api.a3rt.recruit-tech.co.jp/proofreading/v2/typo'

  if (a3rt_sensitivity != null && a3rt_sensitivity.length > 0) {
    input_data['sensitivity'] = a3rt_sensitivity
  };

  if (a3rt_callback != null && a3rt_callback.length > 0) {
    return $.ajax({
      type: 'get',
      url: a3rt_url,
      processData: true,
      contentType: false,
      data: input_data,
      dataType: 'jsonp',
      jsonpCallback: a3rt_callback
    });
  } else {
    return $.ajax({
      type: 'get',
      url: a3rt_url,
      processData: true,
      contentType: false,
      data: input_data,
      dataType: 'json'
    });
  }

  return 0;
}
