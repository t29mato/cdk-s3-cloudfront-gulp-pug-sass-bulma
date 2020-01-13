# 目的

- AWS CDKを利用して静的サイトをS3+CloudFront構成でホスティングの勉強用
- フロントはタスクランナーGulpを使ってPugとSassをCSSに変換

# 環境情報

- macOS 10.15
- node 12.12.0
- npm 6.11.3

# デプロイ

```
$ npm install -g aws-cdk
$ npm install
$ npm run build
$ cdk deploy -c domain=domain.com -c subdomain=www
```

# 技術

## インフラ

- AWS CDK
- Amazon Route 53
- Amazon CloudFront
- Amazon S3

## フロント

- Bulma 0.8.0 (CSSフレームワーク)
- Gulp 4.0.2 (タスクランナー)
- typescript 3.7.2 (CDK構成用)
- Pug
- SCSS

# 参考

- [ベースのCDKテンプレート](https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/static-site/)
