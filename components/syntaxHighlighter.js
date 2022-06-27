import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/synthwave84';
import classNames from "classnames";
import styles from './syntaxHighlighter.module.css';

const SyntaxHighlighter = ({ children, className }) => {
    const code = children.props.children;
    let language = children.props.className?.replace('language-', '');

    return (
        <Highlight className={classNames(className)} {...defaultProps} code={code} theme={theme} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className}`} style={style}>
                  {tokens.map((line, i) => {
                      const lineProps = getLineProps({line, key: i});
                      return (
                          <div key={i} {...lineProps}>
                          {line.map((token, key) => (
                              <span key={key} {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      )
                  })}
                </pre>
            )}
        </Highlight>
    );
};

export default SyntaxHighlighter;