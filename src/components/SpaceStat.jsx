import React from "react";

export default function SpaceStat() {
  return (
    <>
      <section className="section section__info ">
        <p className="section__desc">
          You've used <span className="storage-size bold">815 GB</span> of your
          storage
        </p>
        {/* Begin progress bar */}
        <div class="section__progress-bar">
          <div data-size="80" class="section__progress">
            <div className="section__progress-indicator"></div>
          </div>
        </div>
        {/* end progress bar */}
        <div className="section__caption flex">
          <p>0 GB</p>
          <p>1000 GB</p>
        </div>
      </section>
      <div className="section__storage-info-container">
        <p class="">
          <span class="bold section__storage-info">185</span>
        </p>
        <small class="ml-1">GB LEFT</small>
      </div>
    </>
  );
}
