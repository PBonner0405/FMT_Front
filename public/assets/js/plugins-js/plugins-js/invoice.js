 $('table').on('mouseup keyup', 'input[type=number]', () => calculateTotals());

        $('.btn-add-row').on('click', () => {
            const $lastRow = $('.item:last');
            const $newRow = $lastRow.clone();

            $newRow.find('input').val('');
            $newRow.find('td:last').text('$0.00');
            $newRow.insertAfter($lastRow);

            $newRow.find('input:first').focus();
        });

        function calculateTotals() {
            const subtotals = $('.item').map((idx, val) => calculateSubtotal(val)).get();
            const total = subtotals.reduce((a, v) => a + Number(v), 0);
            $('.total td:eq(1)').text(formatAsCurrency(total));
        }

        function calculateSubtotal(row) {
            const $row = $(row);
            const inputs = $row.find('input');
            const subtotal = inputs[1].value * inputs[2].value;

            $row.find('td:last').text(formatAsCurrency(subtotal));

            return subtotal;
        }

        function formatAsCurrency(amount) {
            return `$${Number(amount).toFixed(2)}`;
        }