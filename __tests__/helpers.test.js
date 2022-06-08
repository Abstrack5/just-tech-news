const { format_date, format_plural, format_url } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural()) correctly pluralizes words', () => {
   const animal1 =  format_plural('Tiger', 2)
   const animal2 =  format_plural('Lion', 1)

    expect(format_plural('Tiger', 2)).toBe('Tigers')
    expect(animal2).toBe('Lion')

});

test('format_url() to shorten URL length', () => {
    const url1 = format_url('https://google.com')
    const url2 = format_url('http://worldofwarcraft.com?c=mage')
    const url3 = format_url('https://reddit.com/abc123')

    expect(url1).toBe('google.com');
    expect(url2).toBe('worldofwarcraft.com');
    expect(url3).toBe('reddit.com');
    
})