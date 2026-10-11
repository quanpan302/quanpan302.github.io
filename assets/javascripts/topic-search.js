(function () {
  'use strict';

  var input = document.getElementById('search');
  var results = document.getElementById('results');
  var count = document.getElementById('results-count');
  var filters = document.getElementById('topic-filter-list');
  if (!input || !results || !count || !filters) return;

  var topicNames = {
    AI: 'Artificial Intelligence',
    DS: 'Data Science',
    KG: 'Knowledge',
    IT: 'Internet Technology',
    MA: 'Mathematics',
    PH: 'Physics',
    RS: 'Remote Sensing',
    SD: 'Software Development'
  };
  var topics = [];
  var activeTopic = '';
  var params = new URLSearchParams(window.location.search);

  function documentTopics(doc) {
    return [].concat(doc.categories || [], doc.tags || []).filter(function (topic) {
      return typeof topic === 'string' && topic.trim() !== '';
    });
  }

  store.forEach(function (doc) {
    documentTopics(doc).forEach(function (topic) {
      if (topics.indexOf(topic) === -1) topics.push(topic);
    });
  });
  topics.sort(function (a, b) {
    return (topicNames[a] || a).localeCompare(topicNames[b] || b);
  });
  if (topics.indexOf(params.get('topic')) !== -1) activeTopic = params.get('topic');
  input.value = params.get('q') || '';

  function addFilter(topic, label) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'topic-filter';
    button.textContent = label;
    button.dataset.topic = topic;
    button.addEventListener('click', function () {
      activeTopic = topic;
      render();
    });
    filters.appendChild(button);
  }

  addFilter('', 'All topics');
  topics.forEach(function (topic) {
    addFilter(topic, topicNames[topic] || topic);
  });
  filters.parentElement.hidden = false;

  function render() {
    var query = input.value.trim().toLowerCase();
    var matches = query ? idx.query(function (q) {
      query.split(lunr.tokenizer.separator).filter(Boolean).forEach(function (term) {
        q.term(term, { boost: 100 });
        q.term(term, { usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 });
        q.term(term, { usePipeline: false, editDistance: 1, boost: 1 });
      });
    }) : store.map(function (_, index) { return { ref: index }; });
    matches = matches.filter(function (match) {
      return !activeTopic || documentTopics(store[match.ref]).indexOf(activeTopic) !== -1;
    });
    filters.querySelectorAll('button').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.topic === activeTopic));
    });
    results.textContent = '';
    count.textContent = matches.length + ' result' + (matches.length === 1 ? '' : 's') +
      (activeTopic ? ' in ' + (topicNames[activeTopic] || activeTopic) : '') + '.';
    if (!matches.length) {
      var empty = document.createElement('p');
      empty.textContent = 'No matches. Try another keyword or choose All topics.';
      results.appendChild(empty);
    }
    var fragment = document.createDocumentFragment();
    matches.forEach(function (match) {
      var doc = store[match.ref];
      var article = document.createElement('article');
      article.className = 'entry';
      var heading = document.createElement('h3');
      heading.className = 'entry-title';
      var link = document.createElement('a');
      var url = new URL(doc.url, window.location.href);
      if (url.protocol !== 'https:' && url.protocol !== 'http:') return;
      link.href = url.href;
      link.textContent = doc.title;
      heading.appendChild(link);
      article.appendChild(heading);
      var excerpt = document.createElement('p');
      var words = (doc.excerpt || '').trim().split(/\s+/);
      excerpt.textContent = words.slice(0, 30).join(' ') + (words.length > 30 ? '…' : '');
      article.appendChild(excerpt);
      var labels = document.createElement('ul');
      labels.className = 'topic-labels';
      labels.setAttribute('aria-label', 'Topics');
      documentTopics(doc).forEach(function (topic) {
        var label = document.createElement('li');
        label.textContent = topicNames[topic] || topic;
        labels.appendChild(label);
      });
      article.appendChild(labels);
      fragment.appendChild(article);
    });
    results.appendChild(fragment);
  }

  input.addEventListener('input', render);
  render();
})();
