$(function(){
    let sum = 0;
    let cart = [];

    //商品がクリックされたとき
    $('.product').on('click',function(){
        let name = $(this).data('name');
        let price = parseInt($(this).data('price'));
        
        //カートに商品を追加と合計金額の計算
        cart.push(name);
        sum += price;
        //カートの内容と合計金額を更新して表示
        $('#cart').html(cart.join());
        $('#sum').text(sum);
    });
    //削除処理
    //$('.product').on('',function(){
       // let name = $(this).data('name');
        //let price = parseInt($(this).data('price'));
        //sum -= price;
        //$('#sum').text(sum);
      //配列内を検索して条件一致したら削除
      //const index = cart.indexOf('.product'); // 配列内で最初に一致するインデックスを取得
       //if (index !== -1) {
        //cart.splice(index, 1); // インデックス位置で1つ削除
        //}
     //カートの内容を表示
      //$('#cart').html(cart.join());
       //});

    //リセットボタン
    $('#reset').on('click',function(){
        cart = [];
        sum = 0;
        $('#cart').html(sum);
        $('#sum').text('0円')
    })
})