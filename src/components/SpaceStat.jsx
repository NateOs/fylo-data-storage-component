import React from "react";

export default function SpaceStat() {
  return (
    <section className="section">
      <div>
        <p className="description">
          You've used <span className="">815 GB</span> of your storage
        </p>
        {/* Begin progress bar */}
        <div class="progress-bar">
          <div data-size="80" class="progress">
            <div className="progress__indicator"></div>
          </div>
        </div>
        {/* end progress bar */}
      </div>
    </section>
  );
}
