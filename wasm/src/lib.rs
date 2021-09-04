use maskedlm::predict_masked_words;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sum(n: i32) -> i32 {
    let mut a: i32 = 0;
    for i in 1..n + 1 {
        a += i;
    }
    a
}

#[wasm_bindgen]
pub fn predict_words(word: &str) -> String {
    predict_masked_words(word)
}
