- 自然言語処理モデル BERT

pip install transformers

# Transformers がインストールされた場所を確認

pip show transformers

# onnx file 作成

python ~/.anyenv/envs/pyenv/versions/3.9.6/lib/python3.9/site-packages/transformers/convert_graph_to_onnx.py --pipeline fill-mask --model bert-base-cased --framework pt bert-masked.onnx

curl -O https://huggingface.co/bert-base-cased/raw/main/vocab.txt
