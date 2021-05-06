//ここに処理を追加

let point = 100;
let contry = 0;  //何回勝ったかを判別


// ルール説明のページに飛ぶ・戻る
$('#rule_btn').on('click', function () {
    $('.rule_screen').fadeIn(400);
    $('.world_map').hide();
    $('.rule_btn').fadeOut(400);
    $('.start_btn').fadeOut(400);
});
$('#return_btn').on('click', function () {
    $('.janken_screen').fadeIn(500);
    $('.rule_screen').hide();
});

// スタートボタンでじゃんけんページへ飛ぶ
$('#start_btn').on('click', function () {
    $('.janken_screen').fadeIn(500);
    $('.rule_screen').hide();
    $('.world_map').hide();
    $('.rule_btn').fadeOut(700);
    $('.start_btn').fadeOut(700);
});

// スタートボタンで6大州のページへ飛ぶ
// $('#start_btn').on('click', function () {
//     $('.continent_screen').fadeIn(700);
//     $('.world_map').fadeOut(500);
//     $('.rule_screen').fadeOut(500);
//     $('.rule_btn').fadeOut(700);
//     $('.start_btn').fadeOut(700);
// });


// 各州のボタンは1度だけ押せる
// ボタンを押すとじゃんけんページへ飛ぶ・contryの値
// $(function () {
//     $('#asia_btn').one('click', function () {
//         $('.janken_screen').fadeIn(500);
//         $('.continent_screen').fadeOut(500);
//         let contry = 10;
//         console.log(contry);
//     });

//     $('#europe_btn').one('click', function () {
//         $('.janken_screen').fadeIn(500);
//         $('.continent_screen').fadeOut(500);
//         let contry = 20;
//         console.log(contry);
//     });

//     $('#africa_btn').one('click', function () {
//         $('.janken_screen').fadeIn(500);
//         $('.continent_screen').fadeOut(500);
//         let contry = 30;
//         console.log(contry);
//     });

//     $('#southAmerica_btn').one('click', function () {
//         $('.janken_screen').fadeIn(500);
//         $('.continent_screen').fadeOut(500);
//         let contry = 40;
//         console.log(contry);
//     });

//     $('#northAmerica_btn').one('click', function () {
//         $('.janken_screen').fadeIn(500);
//         $('.continent_screen').fadeOut(500);
//         let contry = 50;
//         console.log(contry);
//     });

//     $('#oceania_btn').one('click', function () {
//         $('.janken_screen').fadeIn(500);
//         $('.continent_screen').fadeOut(500);
//         contry = 60;
//         console.log(contry);
//     });
// });


$(result).t({
    delay: 0.5,
    speed: 50,
    speed_vary: true,
    repeat: 0,
});

// 手を選ぶ
function my_hand(self) {
    $('.selected').each(function () {
        $(this).toggleClass('selected');
    });
    $(self).toggleClass('selected');
}

// じゃんけんぽん(id=janken_btn)クリックして動かす
$('#janken_btn').on('click', function () {

    // 手を選んでいないときはアラート表示
    if ($('.selected').length == 0) {
        alert('じゃんけんの手を選んでね！');
        return;
    }

    // ランダムに数字が生成(0,1,2)
    // 0=グー,1=チョキ,2=パー
    const n = Math.floor(Math.random() * 3);

    // 相手の画像を削除
    $('#enemy').remove();
    // 相手の手の画像表示
    $('#enemyPanel').append("<img id='enemy' src='img/janken" + n + ".png'/>");

    // 選択した自分の手の画像ファイル名取得
    const filename = $('.selected').attr('src');

    // 画像ファイル名の数字部分抽出(正規表現)
    const hand = filename.match(/\d/)[0];

    // 数字の引き算で勝敗判定 %余りの数字計算する 勝ちは2,負けは1,あいこは0
    const result = (hand + 3 - n) % 3;

    // 勝敗結果をid=resultの部分に表示する
    // result変数の中の数字(計算結果)によって表示が変わる 0,1,2の順(添字)
    $('#result').t(['あいこだね！もう一回チャレンジしよう！', 'きみの負け！マイルが減るよ！', 'せ〜の！'][result]);
    if (result === 2) {
        point += 30;
        contry++;
        $('#point').html(point);
        // $('.janken_screen').fadeOut(500);
        // $('.winner_screen').fadeIn(500);
        switch (contry) {
            case 1:
                $('.janken_screen').hide();
                $('.asia_1').fadeIn(600);
                break;
            case 2:
                $('.janken_screen').hide();
                $('.asia_2').fadeIn(600);
                break;
            case 3:
                $('.janken_screen').hide();
                $('.asia_3').fadeIn(600);
                break;
            case 4:
                $('.janken_screen').hide();
                $('.asia_4').fadeIn(600);
                break;
            case 5:
                $('.janken_screen').hide();
                $('.asia_5').fadeIn(600);
                break;
            case 6:
                $('.janken_screen').hide();
                $('.europe_1').fadeIn(600);
                break;
            case 7:
                $('.janken_screen').hide();
                $('.europe_2').fadeIn(600);
                break;
            case 8:
                $('.janken_screen').hide();
                $('.europe_3').fadeIn(600);
                break;
            case 9:
                $('.janken_screen').hide();
                $('.europe_4').fadeIn(600);
                break;
            case 10:
                $('.janken_screen').hide();
                $('.europe_5').fadeIn(600);
                break;
            case 11:
                $('.janken_screen').hide();
                $('.africa_1').fadeIn(600);
                break;
            case 12:
                $('.janken_screen').hide();
                $('.africa_2').fadeIn(600);
                break;
            case 13:
                $('.janken_screen').hide();
                $('.africa_3').fadeIn(600);
                break;
            case 14:
                $('.janken_screen').hide();
                $('.africa_4').fadeIn(600);
                break;
            case 15:
                $('.janken_screen').hide();
                $('.africa_5').fadeIn(600);
                break;
            case 16:
                $('.janken_screen').hide();
                $('.southAmerica_1').fadeIn(600);
                break;
            case 17:
                $('.janken_screen').hide();
                $('.southAmerica_2').fadeIn(600);
                break;
            case 18:
                $('.janken_screen').hide();
                $('.southAmerica_3').fadeIn(600);
                break;
            case 19:
                $('.janken_screen').hide();
                $('.southAmerica_4').fadeIn(600);
                break;
            case 20:
                $('.janken_screen').hide();
                $('.southAmerica_5').fadeIn(600);
                break;
            case 21:
                $('.janken_screen').hide();
                $('.northAmerica_1').fadeIn(600);
                break;
            case 22:
                $('.janken_screen').hide();
                $('.northAmerica_2').fadeIn(600);
                break;
            case 23:
                $('.janken_screen').hide();
                $('.northAmerica_3').fadeIn(600);
                break;
            case 24:
                $('.janken_screen').hide();
                $('.northAmerica_4').fadeIn(600);
                break;
            case 25:
                $('.janken_screen').hide();
                $('.northAmerica_5').fadeIn(600);
                break;
            case 26:
                $('.janken_screen').hide();
                $('.oceania_1').fadeIn(600);
                break;
            case 27:
                $('.janken_screen').hide();
                $('.oceania_2').fadeIn(600);
                break;
            case 28:
                $('.janken_screen').hide();
                $('.oceania_3').fadeIn(600);
                break;
            case 29:
                $('.janken_screen').hide();
                $('.oceania_4').fadeIn(600);
                break;
            case 30:
                $('.janken_screen').hide();
                $('.oceania_5').fadeIn(600);
                break;
        }
    } else if (result === 1) {
        point -= 10;
        contry += 0;
        $('#point').html(point);
    } else {
        point += 0;
        contry += 0;
        $('#point').html(point);
        return;
    }

    console.log(contry);
});




// 値によって国別のページへ移動する
// $('#win_btn').on('click', function () {
//     switch (contry) {
//         case 1:
//             $('.winner_screen').fadeOut(500);
//             $('.asia_1').fadeIn(500);
//             break;
//         case 2:
//             $('.winner_screen').fadeOut(500);
//             $('.asia_2').fadeIn(500);
//             break;
//         case 3:
//             $('.winner_screen').fadeOut(500);
//             $('.asia_3').fadeIn(500);
//             break;
//         case 4:
//             $('.winner_screen').fadeOut(500);
//             $('.asia_4').fadeIn(500);
//             break;
//         case 5:
//             $('.winner_screen').fadeOut(500);
//             $('.asia_5').fadeIn(500);
//             break;
//         case 6:
//             $('.winner_screen').fadeOut(500);
//             $('.europe_1').fadeIn(500);
//             break;
//         case 7:
//             $('.winner_screen').fadeOut(500);
//             $('.europe_2').fadeIn(500);
//             break;
//         case 8:
//             $('.winner_screen').fadeOut(500);
//             $('.europe_3').fadeIn(500);
//             break;
//         case 9:
//             $('.winner_screen').fadeOut(500);
//             $('.europe_4').fadeIn(500);
//             break;
//         case 10:
//             $('.winner_screen').fadeOut(500);
//             $('.europe_5').fadeIn(500);
//             break;
//         case 11:
//             $('.winner_screen').fadeOut(500);
//             $('.africa_1').fadeIn(500);
//             break;
//         case 12:
//             $('.winner_screen').fadeOut(500);
//             $('.africa_2').fadeIn(500);
//             break;
//         case 13:
//             $('.winner_screen').fadeOut(500);
//             $('.africa_3').fadeIn(500);
//             break;
//         case 14:
//             $('.winner_screen').fadeOut(500);
//             $('.africa_4').fadeIn(500);
//             break;
//         case 15:
//             $('.winner_screen').fadeOut(500);
//             $('.africa_5').fadeIn(500);
//             break;
//         case 16:
//             $('.winner_screen').fadeOut(500);
//             $('.southAmerica_1').fadeIn(500);
//             break;
//         case 17:
//             $('.winner_screen').fadeOut(500);
//             $('.southAmerica_2').fadeIn(500);
//             break;
//         case 18:
//             $('.winner_screen').fadeOut(500);
//             $('.southAmerica_3').fadeIn(500);
//             break;
//         case 19:
//             $('.winner_screen').fadeOut(500);
//             $('.southAmerica_4').fadeIn(500);
//             break;
//         case 20:
//             $('.winner_screen').fadeOut(500);
//             $('.southAmerica_5').fadeIn(500);
//             break;
//         case 21:
//             $('.winner_screen').fadeOut(500);
//             $('.northAmerica_1').fadeIn(500);
//             break;
//         case 22:
//             $('.winner_screen').fadeOut(500);
//             $('.northAmerica_2').fadeIn(500);
//             break;
//         case 23:
//             $('.winner_screen').fadeOut(500);
//             $('.northAmerica_3').fadeIn(500);
//             break;
//         case 24:
//             $('.winner_screen').fadeOut(500);
//             $('.northAmerica_4').fadeIn(500);
//             break;
//         case 25:
//             $('.winner_screen').fadeOut(500);
//             $('.northAmerica_5').fadeIn(500);
//             break;
//         case 26:
//             $('.winner_screen').fadeOut(500);
//             $('.oceania_1').fadeIn(500);
//             break;
//         case 27:
//             $('.winner_screen').fadeOut(500);
//             $('.oceania_2').fadeIn(500);
//             break;
//         case 28:
//             $('.winner_screen').fadeOut(500);
//             $('.oceania_3').fadeIn(500);
//             break;
//         case 29:
//             $('.winner_screen').fadeOut(500);
//             $('.oceania_4').fadeIn(500);
//             break;
//         case 30:
//             $('.winner_screen').fadeOut(500);
//             $('.oceania_5').fadeIn(500);
//             break;
//     }
// });

// ジャンケンに進むボタン
function next_btn() {
    $('.janken_screen').fadeIn(500);
    $('.contry_screen').fadeOut(500);
    $('.continent_screen').fadeOut(500);
}


function continent_btn() {
    switch (contry) {
        case 5:
            $('.contry_screen').fadeOut(500);
            $('.europeContinent').fadeIn(500);
            break;
        case 10:
            $('.contry_screen').fadeOut(500);
            $('.africaContinent').fadeIn(500);
            break;
        case 15:
            $('.contry_screen').fadeOut(500);
            $('.southAmericaContinent').fadeIn(500);
            break;
        case 20:
            $('.contry_screen').fadeOut(500);
            $('.northAmericaContinent').fadeIn(500);
            break;
        case 25:
            $('.contry_screen').fadeOut(500);
            $('.oceaniaContinent').fadeIn(500);
            break;
        case 30:
            $('.contry_screen').fadeOut(500);
            $('.final_screen').fadeIn(500);
            break;
    }
}


// 国別のページ
$('.typ_text').t({
    delay: 1,
    speed: 50,
    speed_vary: true,
    repeat: 0,
});


// ジャンケン進むボタン押すと、次のジャンケンページ
// $('#next_btn').on('click', function () {
//     $('.janken_screen').fadeIn(700);
//     $('.contry_screen').fadeOut(500);
// });


// pointが0になったらゲームオーバー
switch (point) {
    case 0:
        $('.janken_screen').fadeOut(700);
        $('.gameOver').fadeIn(500);
        break;
}




// ゲームオーバーページのはじめからボタン押すと全てリセットされ最初に戻る
$('#reset_btn').on('click', function () {
    $('.world_map').fadeIn(700);
    $('.gameOver').fadeOut(500);
    let point = 100;
    let screen = 0;
    let contry = 0;
});




