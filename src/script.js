function removePaywall(){
  // Remove modal
  document.getElementsByClassName("tp-modal")[0].remove();

  // remove backdrop
  document.getElementsByClassName("tp-backdrop tp-active")[0].remove();

  // remove tp-modal-open class from body to re-enable scrolling
  document.getElementsByClassName('tp-modal-open')[0].classList.remove('tp-modal-open');
}

removePaywall();
