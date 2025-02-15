// Import js-beautify for formatting
import { html as beautifyHtml } from "js-beautify";

/**
 * Beautifies HTML
 *
 * @param {string} html - The HTML to beautify
 * @returns {string} The beautified HTML
 */
export const beautifyHTML = (html) => {
  html = beautifyHtml(html, {
    indent_size: "2",
    indent_char: " ",
    preserve_newlines: false,
    max_preserve_newlines: 0,
    wrap_line_length: 0,
    inline: []
  });

  // Additional cleaning of class attributes
  return html.replace(/class="([^"]*)"/g, (match, classContent) => {
    // Replace multiple spaces or newlines with a single space and trim
    const cleanedClass = classContent.replace(/\s+/g, " ").trim();
    return `class="${cleanedClass}"`;
  });
};

/**
 * Formats currency values
 *
 * @param {number} value - The numeric value to format as currency
 * @param {number} decimals - The number of decimal places to show
 * @param {string} currency - The currency to format the value in
 * @returns {string} The formatted currency string
 *
 * The decimal places are determined by whether the value has decimals:
 * - If the value has decimals (e.g. 10.50), it will show 2 decimal places
 * - If the value is a whole number (e.g. 10), it will show 0 decimal places
 */
export const formatCurrency = (value, decimals = 2, currency = "GBP") => {
  const hasDecimals = value % 1 !== 0;

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: hasDecimals ? decimals : 0,
    maximumFractionDigits: decimals
  }).format(value);
};

