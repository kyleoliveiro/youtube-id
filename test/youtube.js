import youtubeID from '../';
import test from 'ava';

test('Regular image', t => {
	t.same(youtubeID('https://google.com/image.jpg'), false);
	t.end();
});

test('YouTube video (long url, watch)', t => {
	t.same(youtubeID('https://www.youtube.com/watch?v=-S0XbjHnjUc'), '-S0XbjHnjUc');
	t.end();
});

test('YouTube video (long url, embed)', t => {
	t.same(youtubeID('http://youtube.com/embed/-S0XbjHnjUc'), '-S0XbjHnjUc');
	t.end();
});

test('YouTube video (short url, watch)', t => {
	t.same(youtubeID('https://www.youtu.be/watch?v=-S0XbjHnjUc'), '-S0XbjHnjUc');
	t.end();
});

test('YouTube video (short url, embed)', t => {
	t.same(youtubeID('https://youtu.be/embed/-S0XbjHnjUc'), '-S0XbjHnjUc');
	t.end();
});

test('YouTube video (short url), without protocol', t => {
	t.same(youtubeID('youtu.be/-S0XbjHnjUc'), '-S0XbjHnjUc');
	t.end();
});

test('YouTube video (short url), with junk', t => {
	t.same(youtubeID('https://youtu.be/-S0XbjHnjUc&blah?blah&hahahaha=magic'), '-S0XbjHnjUc');
	t.end();
});
