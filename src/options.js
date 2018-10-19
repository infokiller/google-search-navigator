// Based on https://developer.chrome.com/extensions/optionsV2

const flashMessage = message => {
  // Update status to let user know.
  const status = document.getElementById('status');
  status.textContent = message;
  setTimeout(function() {
    status.textContent = '';
  }, 3000);
};

// Saves options to chrome.storage.sync.
const saveOptions = () => {
  const values = {
    wrapNavigation: document.getElementById('wrap-navigation').checked,
    autoSelectFirst: document.getElementById('auto-select-first').checked,
    nextKey: document.getElementById('next-key').value,
    previousKey: document.getElementById('previous-key').value,
    focusSpecificResult: [
      document.getElementById('focus-0th-result').value,
      document.getElementById('focus-1th-result').value,
      document.getElementById('focus-2th-result').value,
      document.getElementById('focus-3th-result').value,
      document.getElementById('focus-4th-result').value,
      document.getElementById('focus-5th-result').value,
      document.getElementById('focus-6th-result').value,
      document.getElementById('focus-7th-result').value,
      document.getElementById('focus-8th-result').value,
      document.getElementById('focus-9th-result').value,
    ],
    navigatePreviousResultPage: document.getElementById('navigate-previous-result-page').value,
    navigateNextResultPage: document.getElementById('navigate-next-result-page').value,
    navigateKey: document.getElementById('navigate-key').value,
    navigateNewTabKey: document.getElementById('navigate-new-tab-key').value,
    navigateNewTabBackgroundKey: document.getElementById(
      'navigate-new-tab-background-key'
    ).value,
    navigateSearchTab: document.getElementById('navigate-search-tab').value,
    navigateImagesTab: document.getElementById('navigate-images-tab').value,
    navigateVideosTab: document.getElementById('navigate-videos-tab').value,
    navigateMapsTab: document.getElementById('navigate-maps-tab').value,
    navigateNewsTab: document.getElementById('navigate-news-tab').value,
    navigateShoppingTab: document.getElementById('navigate-shopping-tab').value,
    navigateBooksTab: document.getElementById('navigate-books-tab').value,
    navigateFlightsTab: document.getElementById('navigate-flights-tab').value,
    navigateFinancialTab: document.getElementById('navigate-financial-tab')
      .value,
    focusSearchInput: document.getElementById('focus-search-input').value,
    navigateShowAll: document.getElementById('navigate-show-all').value,
    navigateShowHour: document.getElementById('navigate-show-hour').value,
    navigateShowDay: document.getElementById('navigate-show-day').value,
    navigateShowWeek: document.getElementById('navigate-show-week').value,
    navigateShowMonth: document.getElementById('navigate-show-month').value,
    navigateShowYear: document.getElementById('navigate-show-year').value,
    toggleSort: document.getElementById('toggle-sort').value
  };
  for (let key in values) {
    extension.options.sync.values[key] = values[key];
  }
  return extension.options.sync
    .save()
    .then(
      () => flashMessage('Options saved.'),
      () => flashMessage('Error when saving options.')
    );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  extension.options.sync.load().then(() => {
    const values = extension.options.sync.values;
    document.getElementById('wrap-navigation').checked = values.wrapNavigation;
    document.getElementById('auto-select-first').checked =
      values.autoSelectFirst;
    document.getElementById('next-key').value = values.nextKey;
    document.getElementById('previous-key').value = values.previousKey;
    document.getElementById('focus-0th-result').value = values.focusSpecificResult[0];
    document.getElementById('focus-1th-result').value = values.focusSpecificResult[1];
    document.getElementById('focus-2th-result').value = values.focusSpecificResult[2];
    document.getElementById('focus-3th-result').value = values.focusSpecificResult[3];
    document.getElementById('focus-4th-result').value = values.focusSpecificResult[4];
    document.getElementById('focus-5th-result').value = values.focusSpecificResult[5];
    document.getElementById('focus-6th-result').value = values.focusSpecificResult[6];
    document.getElementById('focus-7th-result').value = values.focusSpecificResult[7];
    document.getElementById('focus-8th-result').value = values.focusSpecificResult[8];
    document.getElementById('focus-9th-result').value = values.focusSpecificResult[9];
    document.getElementById('navigate-previous-result-page').value =
      values.navigatePreviousResultPage;
    document.getElementById('navigate-next-result-page').value =
      values.navigateNextResultPage;
    document.getElementById('navigate-key').value = values.navigateKey;
    document.getElementById('navigate-new-tab-key').value =
      values.navigateNewTabKey;
    document.getElementById('navigate-new-tab-background-key').value =
      values.navigateNewTabBackgroundKey;
    document.getElementById('navigate-search-tab').value =
      values.navigateSearchTab;
    document.getElementById('navigate-images-tab').value =
      values.navigateImagesTab;
    document.getElementById('navigate-videos-tab').value =
      values.navigateVideosTab;
    document.getElementById('navigate-maps-tab').value = values.navigateMapsTab;
    document.getElementById('navigate-news-tab').value = values.navigateNewsTab;
    document.getElementById('navigate-shopping-tab').value =
      values.navigateShoppingTab;
    document.getElementById('navigate-books-tab').value =
      values.navigateBooksTab;
    document.getElementById('navigate-flights-tab').value =
      values.navigateFlightsTab;
    document.getElementById('navigate-financial-tab').value =
      values.navigateFinancialTab;
    document.getElementById('focus-search-input').value =
      values.focusSearchInput;
    document.getElementById('navigate-show-all').value = values.navigateShowAll;
    document.getElementById('navigate-show-hour').value =
      values.navigateShowHour;
    document.getElementById('navigate-show-day').value = values.navigateShowDay;
    document.getElementById('navigate-show-week').value =
      values.navigateShowWeek;
    document.getElementById('navigate-show-month').value =
      values.navigateShowMonth;
    document.getElementById('navigate-show-year').value =
      values.navigateShowYear;
    document.getElementById('toggle-sort').value = values.toggleSort;
  });
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
