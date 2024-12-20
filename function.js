//images elements
const img_zero_roulette = document.getElementById('zero_fth_roulette');
const img_one_roulette = document.getElementById('one_fth_roulette');
const img_two_roulette = document.getElementById('two_fth_roulette');
const img_three_roulette = document.getElementById('three_fth_roulette');
const img_four_roulette = document.getElementById('four_fth_roulette');
const img_five_roulette = document.getElementById('five_fth_roulette');
const img_six_roulette = document.getElementById('six_fth_roulette');
const img_seven_roulette = document.getElementById('seven_fth_roulette');
const img_eight_roulette = document.getElementById('eight_fth_roulette');
const img_nine_roulette = document.getElementById('nine_fth_roulette');
const img_eleven_roulette = document.getElementById('ten_fth_roulette');
const img_twelve_roulette = document.getElementById('year_fth_roulette');

const arrow_left = document.querySelectorAll('.arrow_left');
const arrow_right = document.querySelectorAll('.arrow_right');

//arrays of photos
const imgs_zer_month = [
    'imgs/cero_month/0_1_pht.jpeg',
    'imgs/cero_month/0_2_pht.jpg',
    'imgs/cero_month/0_3_pht.jpg',
    'imgs/cero_month/0_4_pht.jpg',
    'imgs/cero_month/0_5_pht.jpg'
];
const imgs_first_month = [
    'imgs/first_month/1_1_fth.jpg',
    'imgs/first_month/1_2_pht.jpeg',
    'imgs/first_month/1_3_pht.jpeg',
    'imgs/first_month/1_4_fth.jpeg',
    'imgs/first_month/1_5_fth.jpeg'
];
const imgs_second_month = [
    'imgs/second_month/2_1_fth.jpeg',
    'imgs/second_month/2_2_fth.jpeg',
    'imgs/second_month/2_3_fth.jpeg'
];
const imgs_third_month = [
    'imgs/third_month/3_1_fth.jpeg',
    'imgs/third_month/3_2_fth.jpeg',
    'imgs/third_month/3_3_fth.jpeg'
];
const imgs_fourth_month = [
    'imgs/fourth_month/4_1_fth.jpeg',
    'imgs/fourth_month/4_2_fth.jpeg',
    'imgs/fourth_month/4_3_fth.jpeg',
    'imgs/fourth_month/4_4_fth.jpeg',
    'imgs/fourth_month/4_5_fth.jpeg'
];
const imgs_fifth_month = [
    'imgs/fifth_month/5_1_fth.jpeg',
    'imgs/fifth_month/5_2_fth.jpeg',
    'imgs/fifth_month/5_3_fth.jpeg',
    'imgs/fifth_month/5_4_fth.jpeg'
];
const imgs_sixth_month = [
    'imgs/sixth_month/6_1_fth.jpeg',
    'imgs/sixth_month/6_2_fth.jpeg',
    'imgs/sixth_month/6_3_fth.jpeg',
    'imgs/sixth_month/6_4_fth.jpeg',
    'imgs/sixth_month/6_5_fth.jpeg',
    'imgs/sixth_month/6_6_fth.jpeg',
    'imgs/sixth_month/6_7_fth.jpeg',
    'imgs/sixth_month/6_8_fth.jpeg'
];
const imgs_seventh_month = [
    'imgs/seventh_month/7_1_fth.jpeg',
    'imgs/seventh_month/7_2_fth.jpeg',
    'imgs/seventh_month/7_3_fth.jpeg',
    'imgs/seventh_month/7_4_fth.jpeg'
];
const imgs_eight_month = [
    'imgs/eight_month/8_1_fth.jpeg',
    'imgs/eight_month/8_2_fth.jpeg',
    'imgs/eight_month/8_3_fth.jpeg',
    'imgs/eight_month/8_4_fth.jpeg',
    'imgs/eight_month/8_5_fth.jpeg',
    'imgs/eight_month/8_6_fth.jpeg',
    'imgs/eight_month/8_7_fth.jpeg',
    'imgs/eight_month/8_8_fth.jpeg',
    'imgs/eight_month/8_9_fth.jpeg',
    'imgs/eight_month/8_10_fth.jpeg'
];
const imgs_ninth_month = [
    'imgs/ninth_month/9_1_pht.jpg',
    'imgs/ninth_month/9_2_pht.jpg',
    'imgs/ninth_month/9_3_pht.jpg',
    'imgs/ninth_month/9_4_pht.jpg',
    'imgs/ninth_month/9_5_pht.jpg',
    'imgs/ninth_month/9_6_pht.jpg',
    'imgs/ninth_month/9_7_pht.jpg',
    'imgs/ninth_month/9_8_pht.jpg',
    'imgs/ninth_month/9_9_pht.jpg',
]

const imgs_eleventh_month = [
    'imgs/eleventh_month/11_1_fth.jpeg',
    'imgs/eleventh_month/11_2_fth.jpeg',
    'imgs/eleventh_month/11_3_fth.jpeg',
    'imgs/eleventh_month/11_4_fth.jpeg',
    'imgs/eleventh_month/11_5_fth.jpeg'
]

const imgs_twelfth_month = [
    'imgs/one_year/12_1_pht.jpg',
    'imgs/one_year/12_2_pht.jpg',
    'imgs/one_year/12_3_pht.jpg',
    'imgs/one_year/12_4_pht.jpg',
    'imgs/one_year/12_5_pht.jpg',
    'imgs/one_year/12_6_pht.jpg',
    'imgs/one_year/12_7_pht.jpg',
    'imgs/one_year/12_8_pht.jpg',
]

//ids
let i_0_month = 0, i_1_month = 0, i_2_month = 0, i_3_month = 0
let i_4_month = 0, i_5_month = 0, i_6_month = 0, i_7_month = 0
let i_8_month = 0, i_9_month = 0, i_11_month = 0, i_12_month = 0;
//starter image
img_zero_roulette.src = imgs_zer_month[i_0_month];
img_one_roulette.src = imgs_first_month[i_1_month];
img_two_roulette.src = imgs_second_month[i_2_month];
img_three_roulette.src = imgs_third_month[i_3_month];
img_four_roulette.src = imgs_fourth_month[i_4_month];
img_five_roulette.src = imgs_fifth_month[i_5_month];
img_six_roulette.src = imgs_sixth_month[i_6_month];
img_seven_roulette.src = imgs_seventh_month[i_7_month];
img_eight_roulette.src = imgs_eight_month[i_8_month];
img_nine_roulette.src = imgs_ninth_month[i_9_month];
img_eleven_roulette.src = imgs_eleventh_month[i_11_month];
img_twelve_roulette.src = imgs_twelfth_month[i_12_month];

arrow_right.forEach((arrow, index) => {
    arrow.addEventListener(('click'), () => {
        switch (index) {
            case 0:
                i_0_month++;
                if (i_0_month >= imgs_zer_month.length) i_0_month = 0;
                img_zero_roulette.src = imgs_zer_month[i_0_month];
                break;
            case 1:
                i_1_month++;
                if (i_1_month >= imgs_first_month.length) i_1_month = 0;
                img_one_roulette.src = imgs_first_month[i_1_month];
                break;
            case 2:
                i_2_month++;
                if (i_2_month >= imgs_second_month.length) i_2_month = 0;
                img_two_roulette.src = imgs_second_month[i_2_month];
                break;
            case 3:
                i_3_month++;
                if (i_3_month >= imgs_third_month.length) i_3_month = 0;
                img_three_roulette.src = imgs_third_month[i_3_month];
                break;
            case 4:
                i_4_month++;
                if (i_4_month >= imgs_fourth_month.length) i_4_month = 0;
                img_four_roulette.src = imgs_fourth_month[i_4_month];
                break;
            case 5:
                i_5_month++;
                if (i_5_month >= imgs_fifth_month.length) i_5_month = 0;
                img_five_roulette.src = imgs_fifth_month[i_5_month];
                break;
            case 6:
                i_6_month++;
                if (i_6_month >= imgs_sixth_month.length) i_6_month = 0;
                img_six_roulette.src = imgs_sixth_month[i_6_month];
                break;
            case 7:
                i_7_month++;
                if (i_7_month >= imgs_seventh_month.length) i_7_month = 0;
                img_seven_roulette.src = imgs_seventh_month[i_7_month];
                break;
            case 8:
                i_8_month++;
                if (i_8_month >= imgs_eight_month.length) i_8_month = 0;
                img_eight_roulette.src = imgs_eight_month[i_8_month];
                break;
            case 9:
                i_9_month++;
                if (i_9_month >= imgs_ninth_month.length) i_9_month = 0;
                img_nine_roulette.src = imgs_ninth_month[i_9_month];
                break;
            case 10:
                i_11_month++;
                if (i_11_month >= imgs_eleventh_month.length) i_11_month = 0;
                img_eleven_roulette.src = imgs_eleventh_month[i_11_month];
                break;
            case 11:
                i_12_month++;
                if (i_12_month >= imgs_twelfth_month.length) i_12_month = 0;
                img_twelve_roulette.src = imgs_twelfth_month[i_12_month];
                break;
        }
    })
})


arrow_left.forEach((arrow, index) => {
    arrow.addEventListener(('click'), () => {
        switch (index) {
            case 0:
                i_0_month--;
                if (i_0_month < 0) i_0_month = imgs_zer_month.length -1;
                img_zero_roulette.src = imgs_zer_month[i_0_month];
                break;
            case 1:
                i_1_month--;
                if (i_1_month < 0) i_1_month = imgs_first_month.length - 1;
                img_one_roulette.src = imgs_first_month[i_1_month];
                break;
            case 2:
                i_2_month--;
                if (i_2_month < 0) i_2_month = imgs_second_month.length - 1;
                img_two_roulette.src = imgs_second_month[i_2_month];
                break;
            case 3:
                i_3_month--;
                if (i_3_month < 0) i_3_month = imgs_third_month.length - 1;
                img_three_roulette.src = imgs_third_month[i_3_month];
                break;
            case 4:
                i_4_month--;
                if (i_4_month < 0) i_4_month = imgs_fourth_month.length - 1;
                img_four_roulette.src = imgs_fourth_month[i_4_month];
                break;
            case 5:
                i_5_month--;
                if (i_5_month < 0) i_5_month = imgs_fifth_month.length - 1;
                img_five_roulette.src = imgs_fifth_month[i_5_month];
                break;
            case 6:
                i_6_month--;
                if (i_6_month < 0) i_6_month = imgs_sixth_month.length - 1;
                img_six_roulette.src = imgs_sixth_month[i_6_month];
                break;

            case 7:
                i_7_month--;
                if (i_7_month < 0) i_7_month = imgs_seventh_month.length - 1;
                img_seven_roulette.src = imgs_seventh_month[i_7_month];
                break;
            case 8:
                i_8_month--;
                if (i_8_month < 0) i_8_month = imgs_eight_month.length - 1;
                img_eight_roulette.src = imgs_eight_month[i_8_month];
                break;
            case 9:
                i_9_month--;
                if (i_9_month < 0) i_9_month = imgs_ninth_month.length - 1;
                img_nine_roulette.src = imgs_ninth_month[i_9_month];
                break;
            case 10:
                i_11_month--;
                if (i_11_month < 0) i_11_month = imgs_eleventh_month.length - 1;
                img_eleven_roulette.src = imgs_eleventh_month[i_11_month];
                break;
            case 11:
                i_12_month--;
                if (i_12_month < 0) i_12_month = imgs_twelfth_month.length - 1;
                img_twelve_roulette.src = imgs_twelfth_month[i_12_month];
                break;
        }
    })
})

const yes_box = document.getElementById('yes-box');
const no_box = document.getElementById('no-box');

const modal_yes_box = document.getElementById('modal-yes-box');
const modal_no_box = document.getElementById('modal-no-box')

yes_box.addEventListener('change', () => {
    if (yes_box.checked) {
        modal_yes_box.setAttribute('open', 'true');
    }
})


no_box.addEventListener('click', () => {
    modal_no_box.setAttribute('open', 'true');
})