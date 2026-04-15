import { useEffect, useState } from "react";
import { defaultPortfolio } from "../data/defaultPortfolio";
import { PortfolioData } from "../types";

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

function deepMerge<T>(target: T, source?: Partial<T>): T {
  if (!source) return target;

  const output: Record<string, unknown> = { ...(target as Record<string, unknown>) };

  Object.keys(source).forEach((key) => {
    const sourceValue = (source as Record<string, unknown>)[key];
    const targetValue = (target as Record<string, unknown>)[key];

    if (sourceValue === undefined || sourceValue === null) {
      return;
    }

    if (Array.isArray(sourceValue)) {
      output[key] = sourceValue;
      return;
    }

    if (isObject(sourceValue) && isObject(targetValue)) {
      output[key] = deepMerge(targetValue, sourceValue);
      return;
    }

    output[key] = sourceValue;
  });

  return output as T;
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData>(defaultPortfolio);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const response = await fetch("/portfolio-data.json", {
          cache: "no-store",
        });

        if (!response.ok) return;

        const remoteData = (await response.json()) as Partial<PortfolioData>;
        if (active) {
          setData(deepMerge(defaultPortfolio, remoteData));
        }
      } catch {
        // Fall back to the built-in defaults
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  return data;
}