#!/bin/sh
echo '🏗️👷 Checking Code Formatting...'

# Check Prettier standards
npm run check-format ||
(
    echo 'Prettier Check Failed. Run npm format, add changes and try commit again.';
    false;
)

echo ''
echo '🏗️👷 Checking Code Linting...'

# Check ESLint Standards
npm run check-lint ||
(
        echo 'ESLint Check Failed. Make the required changes listed above, add changes and try to commit again.'
        false; 
)

echo ''
echo '🏗️👷 Checking Code Types...'

# Check tsconfig standards
npm run check-types ||
(
    echo '🤡😂❌🤡 Failed Type check. 🤡😂❌🤡
            Are you seriously trying to write that? Make the changes required above.'
    false;
)

echo ''
echo '🤔🤔🤔🤔... Alright... Code looks good to me... Trying to build now. 🤔🤔🤔🤔'

# Check production build
npm run build ||
(
    echo '❌👷🔨❌ Better call Bob... Because your build failed ❌👷🔨❌
            Next build failed: View the errors above to see why.
    '
    false;
)

# If everything passes... Now we can commit
echo '✅✅✅✅'