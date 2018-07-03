using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LineHighlighter
{
    public partial class MainWindow : Form
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void parseButton_Click(object sender, EventArgs e)
        {
            String text = inputText.Text;
            String[] lines = text.Split('\n');
            listBox.Items.Clear();
            for (int i = 0; i < lines.Length; i++)
            {
                listBox.Items.Add(lines[i]);
            }
        }
    }
}
