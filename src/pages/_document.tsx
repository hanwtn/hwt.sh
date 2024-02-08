import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class WebsiteDocument extends Document {
	override render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
					<script async defer src="https://lab.hantun.cloud/latest.js" />
				</body>
			</Html>
		);
	}
}
