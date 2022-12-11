function search() {
    var search = document.getElementById('search').value;
    var url = 'http://www.google.com/search?q=' + search;
    window.open(url, '_blank');
    
}