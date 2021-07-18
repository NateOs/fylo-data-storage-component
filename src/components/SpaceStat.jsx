import React from "react";

export default function SpaceStat() {
  return (
    <section className="section">
        <p className="section__desc">
          You've used <span className="storage-size">815 GB</span> of your
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
        <div className="section__storage-number">
          <p class="section__paragraph">
            <span>185</span>GB LEFT
          </p>
        </div>
    </section>
  );
}
