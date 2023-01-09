var client = algoliasearch('{{ site.algolia.application_id }}', '{{ site.algolia.api_key }}');
var index = client.initIndex('{{ site.algolia.index_name }}');
$('#search-input').autocomplete({ 
  hint: false,
  minLength: 3,              
  templates: {
    empty: '<div>Artikel tidak ditemukan</div>',
    footer: '<div class="branding text-center">Powered by <img src="https://www.algolia.com/static_assets/images/press/downloads/algolia-logo-light.svg" height="15px"/></div>'
  }
}, [{
  source: $.fn.autocomplete.sources.hits(index, { hitsPerPage: 5}),
  displayKey: 'title',      
  templates: {
    suggestion: function(suggestion) {
      return '<div class="result-title">' + suggestion._highlightResult.title.value + '</div><div class="result-snippet">' + suggestion._snippetResult.content.value + '</div>';
    }
  },
  debounce: 500,
}]).on('autocomplete:selected', function(event, suggestion, dataset) {
  window.location.href = suggestion.url;      
});
