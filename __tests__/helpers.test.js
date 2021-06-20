const {format_date, format_plural, format_url} = require('../utils/helpers')

test('format_date() returns a date string', () => {
    const date = new Date('2021-03-20 16:14:07');

    expect(format_date(date)).toBe('3/20/2021')
});

test('format_plural returns a word to be a pluralized word', () => {
    const word1 = format_plural('tiger', 1);
    const word2 = format_plural('lion', 2);
    expect(word1).toBe('tiger');
    expect(word2).toBe('lions');
});

// shorten URL Test
test('format_url() returns a simplified URL string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolwave.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolwave.com');
    expect(url3).toBe('google.com');
});