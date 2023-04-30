import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./ButtonSubs.css";

export const ButtonSubs = () => {
  const [isLoading, setLoading] = useState(false);

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <>
      <button
        // variant="success"
        className="btn-subs btn btn-outline-success"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? "Loading…" : "Suscribete"}
      </button>
    </>
  );
};
